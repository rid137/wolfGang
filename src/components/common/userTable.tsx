import { useReactTable, getCoreRowModel, flexRender, ColumnDef, getPaginationRowModel } from '@tanstack/react-table'


interface ReactTableProps<TData, TValue> {
columns: ColumnDef<TData, TValue>[]
data: TData[]
}

export function UserTable<TData, TValue>({columns, data}: ReactTableProps<TData, TValue>) {


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
      })
  


      return (
        <>
            {/* <div className="rounded-md border overflow-hidden overflow-x-hidden">
                <table className=''>
                    <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className='text-[.6rem] lg:text-[.9rem]'>
                        {headerGroup.headers.map((header) => {
                            return (
                            <th key={header.id} className='font-bold'>
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                    )}
                            </th>
                            )
                        })}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            className='text-[.5rem] sm:text-[.6rem] lg:text-[.9rem] bg-white mb-2'
                        >
                            {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                            ))}
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td  className="h-24 text-center">
                            No results.
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div> 

            <div className="mt-4 flex items-center justify-center gap-4 text-white">
                <button onClick={() => table.setPageIndex(0)} className="bg-primary text-white py-1 px-1 xs:py-2 xs:px-3 rounded-xl text-[.8rem]">First Page </button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="bg-primary text-white py-1 px-1 xs:py-2 xs:px-3 rounded-xl text-[.8rem] disabled:bg-blue-400">Previous Page</button>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="bg-primary text-white py-1 px-1 xs:py-2 xs:px-3 rounded-xl text-[.8rem] disabled:bg-blue-400">Next Page</button>
                <div onClick={() => table.setPageIndex(table.getPageCount() - 1)} className="bg-primary text-white py-1 px-1 xs:py-2 xs:px-3 rounded-xl text-[.8rem]">Last Page</div>
                
            </div>
             */}

        <div className="overflow-x-auto max-w-full rounded-md mt- box-border">
            <table className="w-full border" style={{ tableLayout: "fixed" }}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className='text-[.6rem] lg:text-[.9rem] py-5'>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className='p-4 b-[#F5F5F5] border-b text-center' // Centering header text
                                    style={{ width: `${100 / headerGroup.headers.length}%` }} // Equal width for each header
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                className='text-[.5rem] sm:text-[.6rem] lg:text-[.9rem] border-b text-center'
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className='p-4 my-2 bg-white'
                                        style={{ width: `${100 / row.getVisibleCells().length}%` }} // Equal width for each cell
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className=" text-center px-4 py-1 my-2">
                                No results.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


        

        <div className="mt-4 flex items-center justify-center gap-2 md:gap-4 text-white text-[.5rem] md:text-[.8rem]">
                <button onClick={() => table.setPageIndex(0)} className="bg-primary text-white py-1 px-2 xs:py-2 xs:px-3 rounded-xl">First Page </button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="bg-primary text-white py-1 px-2 xs:py-2 xs:px-3 rounded-xl disabled:bg-blue-400">Previous Page</button>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="bg-primary text-white py-1 px-2 xs:py-2 xs:px-3 rounded-xl disabled:bg-blue-400">Next Page</button>
                <div onClick={() => table.setPageIndex(table.getPageCount() - 1)} className="bg-primary text-white py-1 px-2 xs:py-2 xs:px-3 rounded-xl">Last Page</div>
                
        </div>


        </>



      )
}

// export default reactTable
        // <div className="overflow-x-auto max-w-full rounded-md mt- box-border">
        //     <table className="w-full border">

        //         <thead>
        //             {table.getHeaderGroups().map((headerGroup) => (
        //                 <tr key={headerGroup.id} className='text-[.6rem] lg:text-[.9rem] py-5'>
        //                 {headerGroup.headers.map((header) => {
        //                     return (
        //                     <th key={header.id} className='p-4 text-left bg-[#F5F5F5] border-b '>
        //                         {header.isPlaceholder
        //                         ? null
        //                         : flexRender(
        //                             header.column.columnDef.header,
        //                             header.getContext()
        //                             )}
        //                     </th>
        //                     )
        //                 })}
        //                 </tr>
        //             ))}
        //         </thead>

        //             <tbody>
        //                 {table.getRowModel().rows?.length ? (
        //                     table.getRowModel().rows.map((row) => (
        //                     <tr
        //                         key={row.id}
        //                         data-state={row.getIsSelected() && "selected"}
        //                         className='text-[.5rem] sm:text-[.6rem] lg:text-[.9rem] border-b '
        //                     >
        //                         {row.getVisibleCells().map((cell) => (
        //                         <td key={cell.id} className='p-4 my-2 bg-white'>
        //                             {flexRender(cell.column.columnDef.cell, cell.getContext())}
        //                         </td>
        //                         ))}
        //                     </tr>
        //                     ))
        //                 ) : (
        //                     <tr>
        //                     <td colSpan={columns.length} className=" text-center px-4 py-1 my-2">
        //                         No results.
        //                     </td>
        //                     </tr>
        //                 )}
        //             </tbody>
        //     </table>
        // </div>