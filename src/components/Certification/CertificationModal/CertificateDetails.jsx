import { motion } from "motion/react";
import {
  Building2,
  CalendarDays,
  FingerprintPattern,
  SquareCheckBig,
} from "lucide-react";

export default function CertificateDetails({
  certificate,
}) {
  const hasMultipleImages =
    (certificate?.images?.length || 0) > 1;

  return (
    <div
      className="
        relative
        flex
        flex-col
        bg-white
        dark:bg-slate-900
        lg:max-h-[85vh]
      "
    >
      <div
        className="
          flex-1
          overflow-y-auto
          p-5
          sm:p-7
          md:p-8
          lg:p-9
        "
      >
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-blue-50
            px-3
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-blue-600
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          Certification Detail
        </span>

        <h2
          className="
            mt-5
            pr-10
            text-xl
            font-black
            leading-tight
            text-slate-900
            dark:text-white
            sm:text-lg
            lg:pr-0
          "
        >
          {certificate.title}
        </h2>

        <div className="mt-7 space-y-3">
          {/* Organization */}
          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              <Building2 size={19} />
            </div>

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                Organization
              </p>

              <p
                className="
                  mt-1
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                {certificate.organization}
              </p>
            </div>
          </div>

          {/* Issued */}
          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-50
                text-cyan-600
                dark:bg-cyan-500/10
                dark:text-cyan-400
              "
            >
              <CalendarDays size={19} />
            </div>

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                Issued
              </p>

              <p
                className="
                  mt-1
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                {certificate.date}
              </p>
            </div>
          </div>

          {/* Credential ID */}
          {certificate.credentialID && (
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-50
                  text-violet-600
                  dark:bg-violet-500/10
                  dark:text-violet-400
                "
              >
                <FingerprintPattern size={19} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Credential ID
                </p>

                <p
                  className="
                    mt-1
                    break-all
                    font-semibold
                    text-slate-700
                    dark:text-slate-200
                  "
                >
                  {certificate.credentialID}
                </p>
              </div>
            </div>
          )}
        </div>

        <div
          className="
            my-8
            h-px
            bg-slate-200
            dark:bg-slate-800
          "
        />

        {certificate.detailLabel && (
          <h3
            className="
              text-lg
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {certificate.detailLabel}
          </h3>
        )}

        {certificate.details?.length > 0 && (
          <ul className="mt-5 space-y-3">
            {certificate.details.map(
              (detail, index) => (
                <motion.li
                  key={`${detail}-${index}`}
                  initial={{
                    opacity: 0,
                    x: 10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-3.5
                    text-sm
                    leading-6
                    text-slate-600
                    dark:border-slate-800
                    dark:bg-slate-800/50
                    dark:text-slate-300
                  "
                >
                  <SquareCheckBig
                    size={18}
                    className="
                      mt-0.5
                      shrink-0
                      text-blue-500
                    "
                  />

                  <span>{detail}</span>
                </motion.li>
              )
            )}
          </ul>
        )}
      </div>

      {hasMultipleImages && (
        <div
          className="
            border-t
            border-slate-200
            px-5
            py-4
            text-center
            text-xs
            text-slate-400
            dark:border-slate-800
            lg:hidden
          "
        >
          Use the arrows or swipe through the
          certificate pages.
        </div>
      )}
    </div>
  );
}