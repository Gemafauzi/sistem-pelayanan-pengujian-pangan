import {
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Pagination,
} from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";

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
    statusService: "Diterima",
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
    statusService: "Diterima",
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
    statusService: "Diterima",
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
    statusService: "Diterima",
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
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(dataTransactions.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return dataTransactions.slice(start, end);
  }, [page, dataTransactions]);

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
        isHeaderSticky
        aria-label="Table Transactions"
        bottomContent={
          <div className="flex justify-center w-full">
            <Pagination
              isCompact
              showControls
              showShadow
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
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

        <TableBody emptyContent={"Belum ada transaksi."} items={items}>
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
