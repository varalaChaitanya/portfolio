import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";

import { login } from "../../services/authService";
import { useAdmin } from "../../context/AdminContext";

const LoginModal = ({ isOpen, onClose }) => {
  const { setIsAdmin } = useAdmin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login({
        email,
        password,
      });

      setIsAdmin(true);

      onClose();
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-[92%]
              max-w-md
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              bg-white
              p-8
              shadow-2xl
              dark:bg-slate-900
            "
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5"
            >
              <X />
            </button>

            <div className="mb-8 text-center">
              <Lock
                size={42}
                className="mx-auto text-blue-500"
              />

              <h2 className="mt-4 text-3xl font-bold">
                Admin Login
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full rounded-xl border p-4"
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full rounded-xl border p-4"
              />

              <button
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-blue-600
                  py-4
                  font-semibold
                  text-white
                "
              >
                {loading
                  ? "Signing In..."
                  : "Login"}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;

