// Notification.jsx
const Notification = ({ type, message }) => {
  if (!message) return null;

  const styles = {
    success: "bg-green-100 border-l-4 border-green-500 text-green-700",
    error: "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700",
  };

  return (
    <div className={`${styles[type]} p-4 mb-6 rounded shadow-md animate-fade-in`} role="alert">
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Notification;