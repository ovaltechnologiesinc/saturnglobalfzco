import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '@/hooks/useToast';

export interface ToastContainerProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success' || !toast.type;
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-white border border-[#B89047]/40 shadow-xl text-[#222326] animate-in slide-in-from-bottom-5 duration-200"
          >
            {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
            {isError && <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#B89047] shrink-0 mt-0.5" />}

            <div className="flex-1 text-left">
              <h4 className="text-sm font-semibold text-[#1C1D21]">{toast.title}</h4>
              {toast.description && (
                <p className="text-xs text-[#66676B] mt-0.5">{toast.description}</p>
              )}
            </div>

            <button
              onClick={() => onRemove(toast.id)}
              className="text-[#888888] hover:text-[#111111] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
