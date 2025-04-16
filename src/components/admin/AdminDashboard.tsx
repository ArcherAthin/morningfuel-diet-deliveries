
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demonstration
const orders = [
  {
    id: 1,
    customerName: "John Doe",
    plan: "Classic Balanced Plan",
    date: "2024-04-16",
    status: "Active",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    plan: "Energy Booster Plan",
    date: "2024-04-16",
    status: "Pending",
  },
];

const AdminDashboard = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.plan}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                    order.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDashboard;
