import {
  Button,
  Link,
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
    label: "No. Transaksi",
  },
  {
    key: "nameService",
    label: "Nama Layanan",
  },
  {
    key: "statusPay",
    label: "Status Pembayaran",
  },
  {
    key: "price",
    label: "Biaya",
  },
  {
    key: "statusService",
    label: "Status Layanan",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const dataTransactions = [
  {
    id: 1,
    no: "U-0001",
    nameService: "John",
    statusPay: "Sudah Dibayar",
    price: 150000,
    statusService: "Diterima",
  },
  {
    id: 1,
    no: "U-0001",
    nameService: "John",
    statusPay: "Sudah Dibayar",
    price: 150000,
    statusService: "Menunggu Verifikasi",
  },
  {
    id: 1,
    no: "U-0001",
    nameService: "John",
    statusPay: "Sudah Dibayar",
    price: 150000,
    statusService: "Menunggu Sampel Tiba",
  },
  {
    id: 1,
    no: "U-0001",
    nameService: "John",
    statusPay: "Sudah Dibayar",
    price: 150000,
    statusService: "Diterima",
  },
  {
    id: 1,
    no: "U-0001",
    nameService: "John",
    statusPay: "Sudah Dibayar",
    price: 150000,
    statusService: "Menunggu Verifikasi",
  },
  {
    id: 1,
    no: "U-0001",
    nameService: "John",
    statusPay: "Sudah Dibayar",
    price: 150000,
    statusService: "Menunggu Sampel Tiba",
  },
];

export default function ProfileTransaction() {
  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "price":
        return `Rp. ${cellValue.toLocaleString("id-ID")}`;

      case "actions":
        return (
          <Button
            as={Link}
            color="primary"
            href={`/profile/transaction/${item.id}`}
            radius="sm"
            size="sm"
          >
            Detail
          </Button>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <main className="container flex flex-col justify-center max-w-5xl gap-6 py-20 grow">
      <h1 className="text-3xl font-semibold text-center">Transaksi Saya</h1>

      <Table
        aria-label="Table Transactions"
        classNames={{
          wrapper: "rounded-md",
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

        <TableBody items={dataTransactions}>
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
