import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const items = [
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',
        },
        {
          label: 'Update',
          icon: 'pi pi-fw pi-user-plus',
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-user-minus',
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List',
            },
          ],
        },
      ],
    },
  ];

  const start = (
    <div className="flex justify-content-center align-items-center">
      <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2" />
      <p className="font-semibold text-indigo-500 text-xl mr-6">User Management</p>
    </div>
  );
  const end = <InputText placeholder="Search" type="text" className="w-full" />;

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
