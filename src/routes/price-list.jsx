import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCallback } from "react";

const columns = [
  {
    key: "no",
    label: "No.",
  },
  {
    key: "type",
    label: "Jenis Analisis",
  },
  {
    key: "method",
    label: "Metode",
  },
  {
    key: "price",
    label: "Biaya",
  },
];

const dataPriceList = [
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
  {
    id: 1,
    type: "Air",
    method: "Gravimetri",
    price: 21000,
  },
];

export default function PriceList() {
  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "price":
        return `Rp. ${cellValue.toLocaleString("id-ID")}`;

      case "no":
        return `${item.id}`;

      default:
        return cellValue;
    }
  }, []);

  return (
    <main className="container flex flex-col justify-center max-w-5xl gap-6 py-20 grow">
      <h1 className="text-3xl font-semibold text-center">
        Daftar Harga Layanan{" "}
      </h1>

      <Table
        isHeaderSticky
        aria-label="Table Transactions"
        classNames={{
          wrapper: "rounded-md max-h-[520px] relative overflow-auto",
          table: "min-h-[400px]",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align={column.key === "actions" ? "center" : "start"}
              className="capitalize"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody
          emptyContent={"Belum ada daftar harga."}
          items={dataPriceList}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
}
