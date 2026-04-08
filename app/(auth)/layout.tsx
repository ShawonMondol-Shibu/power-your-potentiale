"use client";

import { cubicBezier, easeInOut, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRegisterPage = pathname === "/register";
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cubicBezier (0.22, 1, 0.36, 1) },
    },
  };

  const softFloat = shouldReduceMotion
    ? {}
    : {
        y: [0, -18, 0],
        x: [0, 10, 0],
        scale: [1, 1.08, 1],
      };

  return (
    <div className="bg-linear-to-br min-h-screen from-gray-100 via-black to-gray-50 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
          animate={softFloat}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: "mirror",
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 h-60 w-60 rounded-full bg-lime-500/10 blur-3xl"
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, 24, 0], x: [0, -14, 0], scale: [1, 0.95, 1] }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: easeInOut,
            delay: 1.2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, -16, 0], scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: "mirror",
            ease: easeInOut,
            delay: 0.4,
          }}
        />

        {/* Grid pattern */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="relative flex flex-col lg:flex-row">
        {/* Left side - Brand/Visual section */}
        <motion.div
          className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-linear-to-br from-emerald-900/20 via-transparent to-lime-900/10" />

          <div className="relative z-10">
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-lime-400"
                whileHover={shouldReduceMotion ? undefined : { rotate: -6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <span className="text-black font-black text-xl">P</span>
              </motion.div>
              <h1 className="text-2xl font-bold tracking-tight">POTENTIALE</h1>
            </motion.div>

            <motion.div
              className="max-w-lg mt-16 lg:mt-24"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
            >
              <motion.h2
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
              >
                Power Your
                <motion.span
                  className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-lime-400"
                  animate={shouldReduceMotion ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Potential
                </motion.span>
              </motion.h2>
              <motion.p
                className="mt-6 text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34 }}
              >
                Join the world&apos;s most elite fitness community. Transform your
                body, elevate your mind, and unlock your true potential with
                personalized training and nutrition.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.42 },
                  },
                }}
              >
                <motion.div
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm">Personalized workout plans</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-lime-500" />
                  <span className="text-sm">Expert nutrition guidance</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-cyan-500" />
                  <span className="text-sm">24/7 community support</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative z-10 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-gray-700 to-transparent" />
              <span>Trusted by 50,000+ athletes worldwide</span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-gray-700 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Auth form section */}
        <motion.div
          className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-md">
            <motion.div
              key={pathname}
              className="relative"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glassmorphism card */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
                animate={shouldReduceMotion ? {} : { boxShadow: ["0 24px 60px rgba(0,0,0,0.18)", "0 30px 80px rgba(132,204,22,0.12)", "0 24px 60px rgba(0,0,0,0.18)"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative p-8 lg:p-10">
                {/* Auth header */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                >
                  <motion.div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-linear-to-br from-emerald-500/20 to-lime-500/20"
                    animate={shouldReduceMotion ? {} : { rotate: [0, 2, -2, 0], y: [0, -4, 0] }}
                    transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-400 to-lime-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold">
                    {isRegisterPage ? "Create Your Account" : "Welcome Back"}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {isRegisterPage
                      ? "Start your fitness journey with a personalized account"
                      : "Sign in to continue your fitness journey"}
                  </p>
                </motion.div>

                {/* Children (login form) */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.14 }}
                >
                  {children}
                </motion.div>

                {/* Additional auth options */}
                <motion.div
                  className="mt-8 border-t border-white/10 pt-8"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                >
                  <p className="text-center text-sm text-gray-400">
                    {isRegisterPage
                      ? "Already have an account? "
                      : "Don&apos;t have an account? "}
                    <Link
                      href={isRegisterPage ? "/login" : "/register"}
                      className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline"
                    >
                      {isRegisterPage ? "Sign in" : "Sign up now"}
                    </Link>
                  </p>
                  <div className="mt-4 flex justify-center">
                    <p className="text-sm text-gray-400">
                      {isRegisterPage
                        ? "Use your real details so we can personalize your plan."
                        : "Stay signed in to pick up your training anytime."}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Footer note */}
            <motion.div
              className="mt-8 text-center text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              <p>
                By continuing, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
