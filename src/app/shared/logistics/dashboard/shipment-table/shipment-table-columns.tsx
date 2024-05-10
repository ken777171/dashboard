'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import { toCurrency } from '@/utils/to-currency';
import { shippingStatuses, StatusType } from '@/data/shipment-data';
import AvatarCard from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';
import DeletePopover from '@/app/shared/delete-popover';

const statusColors = (status: StatusType) => {
  if (shippingStatuses.Approved === status) {
    return 'success';
  }
  if (shippingStatuses.InTransit === status) {
    return 'secondary';
  }
  if (shippingStatuses.OutForDelivery === status) {
    return 'info';
  }
  if (shippingStatuses.Delivered === status) {
    return 'success';
  }
  if (shippingStatuses.DeliveryFailed === status) {
    return 'danger';
  }
};

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'paid':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case 'overdue':
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  onChecked,
}: Columns) => [
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="ID" className="opacity-0" />,
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="ms-6 inline-flex">
        <Checkbox
          value={row.id}
          aria-label="Id"
          className="cursor-pointer"
          {...(onChecked && { onChange: (e) => onChecked(e, e.target.value) })}
        />
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Date"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'date'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('date'),
    dataIndex: 'date',
    key: 'date',
    width: 240,
    render: (value: Date) => <DateCell date={value} />,
  },
  // {
  //   title: <HeaderCell title="Time" />,
  //   dataIndex: 'trackingNumber',
  //   key: 'trackingNumber',
  //   width: 250,
  // },
  {
    title: <HeaderCell title="Componenet" />,
    dataIndex: 'component',
    key: 'component',
    width: 250,
    render: (value: string) => (
      <Text className="font-medium text-gray-700 dark:text-gray-600">
        {value}
      </Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Error"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'error'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('error'),
    dataIndex: 'error',
    key: 'error',
    width: 200,
    render: (value: string) => (
      <Text className="font-medium text-gray-700 dark:text-gray-600">
        {value}
      </Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Duration"
        sortable
        // className="me-6 justify-end"
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'duration'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('duration'),
    dataIndex: 'duration',
    key: 'duration',
    width: 200,
    // align: 'right',
    render: (value: string) => (
      <Text className="me-6 font-medium text-gray-700 dark:text-gray-600">
        {value} seconds
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 220,
    render: (status: StatusType) => (
      <Badge
        variant="outline"
        className="w-32 font-medium"
        color={statusColors(status)}
        data-color={statusColors(status)}
      >
        {status}
      </Badge>
    ),
  },
  {
    title: <HeaderCell title="Solution" />,
    dataIndex: 'solution',
    key: 'solution',
    width: 200,
    render: (value: string) => getStatusBadge(value),
  },
];
