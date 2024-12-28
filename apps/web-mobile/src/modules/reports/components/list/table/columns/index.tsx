import { ColumnDef } from '@tanstack/react-table';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ReportTable = {
  id: string;
  date: string;
  status: 'Approved' | 'Rejected' | 'Pending';
  evidence: string;
  quantity: string;
};

export const columns: ColumnDef<ReportTable>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status');

      return (
        <div className={`flex items-center space-x-2`}>
          <Badge
            variant={status === 'Approved' ? 'default' : status === 'Rejected' ? 'destructive' : 'secondary'}
            className={status === 'Approved' ? 'bg-green-500 hover:bg-green-600' : ''}
          >
            {status as string}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'evidence',
    header: 'Evidence',
    cell: ({ row }) => {
      const evidenceUrl = row.getValue('evidence');
      return (
        <Button size="sm" onClick={() => window.open(String(evidenceUrl), '_blank')}>
          <Icon icon="mdi:download" className="h-4" />
        </Button>
      );
    },
  },
];
