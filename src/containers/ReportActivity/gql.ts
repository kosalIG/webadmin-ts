import { gql } from '@apollo/client';

export const GET_LIST = gql`
    query ReportActivityList($filter: ReportActivityFilter!) {
        reportActivityList(filter: $filter) {
            data {
                driver {
                    id
                    mobileNumber
                    fullName
                    group
                }
                total
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;
