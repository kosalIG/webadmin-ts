import { useState } from 'react';
import XLSX from 'xlsx';
import { UseReadExcel } from './interface';

export function useReadExcel({ onFinish }: { onFinish: (data: any[]) => void }): UseReadExcel {
    const [loading, setLoading] = useState(false);

    async function customUpload(file: any) {
        setLoading(true);
        readFilePromise(file.file)
            .then((data) => {
                if (data) {
                    onFinish(excelRecords(data as any[]));
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }

    // Add Status to file
    function excelRecords(record: any[]) {
        if (!record) return [];
        return record.map((item: any, idx) => ({
            ...item,
            id: `NEW_EXCEL${idx + 1}`,
            isNew: true,
            isError: validateField(item),
        }));
    }

    // validate fields isEmpty
    function validateField(target: any) {
        const { fullName, localNumber } = target || {};
        if (fullName && localNumber) {
            return false;
        }
        return true;
    }

    function readFilePromise(file: any) {
        const promise = new Promise((resolve, reject) => {
            const filerReader = new FileReader();
            filerReader.readAsArrayBuffer(file);
            filerReader.onload = (e: any) => {
                const buffArray = e.target.result;
                const wb = XLSX.read(buffArray, {
                    type: 'buffer',
                    t: 'S',
                } as any);
                // Sheet name
                const wsname = wb.SheetNames[0];
                // Find data with sheet name
                const ws = wb.Sheets[wsname];
                // Results
                const data = XLSX.utils.sheet_to_json(ws, { raw: false });
                resolve(data);
            };
            filerReader.onerror = (error) => {
                reject(error);
            };
        });
        return promise;
    }

    function be4Upload(file: any): boolean {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        if (file.type !== fileType) {
            return false;
        }
        return true;
    }
    return { loading, be4Upload, customUpload };
}
