export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div className="bg-green-950 text-white " >{children}</div>
      <div className="flex content-end justify-center gap-4 p-4 bg-green-950">
        <div className="flex flex-col gap-2 bg-green-100 text-black" >
          <div className="border-2 border-green-900 bg-green-700 text-white">{users}</div>
          <div className="border-2 border-amber-400 bg-gray-600 text-white">{revenue}</div>
        </div>
        <div className="border-2 border-b-indigo-400">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
