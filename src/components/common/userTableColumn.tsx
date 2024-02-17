import { ColumnDef } from "@tanstack/react-table";
import {  DisputeAccountType, InquiryType, scoresType } from "../../types/clientDetailsObj";
import { DateTime } from "luxon";



export const disputeAccountTableColumns: ColumnDef<DisputeAccountType | null>[] = [
    {
        header: "Account name",
        accessorKey: "accountName"
        // accessorFn: "accountName"
    },
    {
        header: "Account number",
        accessorKey: "accountNumber",
    },
    {
        header: "Bureau",
        accessorKey: "bureau",
    },
    {
        header: "Balance",
        accessorKey: "balance"
    }
]


export const inquiryTableColumns: ColumnDef<InquiryType | null>[] = [
    {
        header: "Name",
        accessorKey: "name"
    },
    {
        header: "Date Of Inquiry",
        accessorKey: "date",
    },
    {
        header: "Bureau",
        accessorKey: "bureau",
    },
]


export const scoreTableColumns: ColumnDef<scoresType | null>[] = [
    {
        header: "Date",
        accessorKey: "createdAt",
        cell: ({row}) => {
            const refreshDate = row.getValue("createdAt")
            return DateTime.fromISO(refreshDate as string).toLocaleString(DateTime.DATE_MED)
        }
    },
    {
        header: "Experian Score",
        accessorKey: "experianScore",
    },
    {
        header: "Equifax Score",
        accessorKey: "equifaxScore",
    },
    {
        header: "Transunion Scores",
        accessorKey: "transunionScore"
    }
]
