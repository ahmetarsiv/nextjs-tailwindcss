import {useState} from "react";
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query';
import TableMobile from "./TableMobile";

export default function Table({head, body, searchable}) {

    const isMobile = useMediaQuery('(max-width: 600px)')

    const [sorting, setSorting] = useState(false)
    const [search, setSearch] = useState('')
    const filteredData = body && body.filter(
        items => items.some(
            item => (item?.key || item?.props?.searchableText || item).toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR'))
        )
    ).sort((a, b) => {
        if (sorting?.orderBy === 'asc') {
            return (a[sorting.key]?.key || a[sorting.key]?.props?.searchableText || a[sorting.key]).toString().localeCompare(b[sorting.key]?.key || b[sorting.key]?.props?.searchableText || b[sorting.key])
        }
        if (sorting?.orderBy === 'desc') {
            return b[sorting.key].toString().localeCompare(a[sorting.key])
        }
    })

    if (!body || body?.length === 0) {
        return (
            <div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm">Gösterilecek veri bulunmuyor.</div>
        )
    }

    return (
        <>
            {searchable && (
                <div className="p-4 mb-4 flex gap-x-2">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="text"
                        placeholder="Tabloda ara"
                        className="border border-purple-700 focus:border-purple-100 text-sm rounded-lg w-full p-2.5"
                    />
                </div>
            )}
            {isMobile && <TableMobile head={head} body={filteredData}/>}
            {!isMobile && (
                <div className="w-full  border rounded p4">
                    <table className="w-full">
                        <thead>
                        <tr>
                            {head.map((h, key) => (
                                <th
                                    width={h?.width}
                                    className="text-left bg-gray-50 text-sm font-semibold text-gray-500 p-3 border-b"
                                    key={key}>
                                    <div className="inline-flex items-center gap-x-2">
                                        {h.name}
                                        {h.sortable && (
                                            <button onClick={() => {
                                                if (sorting?.key === key) {
                                                    setSorting({
                                                        key,
                                                        orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
                                                    })
                                                } else {
                                                    setSorting({
                                                        key,
                                                        orderBy: 'asc'
                                                    })
                                                }
                                            }}>
                                            </button>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData.map((items, key) => (
                            <tr className="group" key={key}>
                                {items.map((item, key) => (
                                    <td
                                        className="p-3 text-sm group-hover:bg-purple-50 group-hover:text-purple-600"
                                        key={key}>
                                        {Array.isArray(item) ? (
                                            <div className="flex gap-x-2.5">
                                                {item}
                                            </div>
                                        ) : item}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}
