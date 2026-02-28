import { MAINTENANCE_TEXT } from "../utils/constants";

export function MaintenanceMessage() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        WE ARE REALLY SORRY
      </h1>
      <p className="text-lg md:text-xl font-medium text-gray-600 mt-4">
        SITE IS CURRENTLY CLOSED
      </p>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mt-8 leading-relaxed">
        {MAINTENANCE_TEXT}
      </p>
    </div>
  );
}