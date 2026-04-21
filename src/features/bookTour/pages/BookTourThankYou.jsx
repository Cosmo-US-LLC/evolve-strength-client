import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BookTourThankYou() {
  const [searchParams] = useSearchParams();
  const locationName = searchParams?.get("location_name");
  const date = searchParams?.get("date");
  const time = searchParams?.get("time");

  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main className="h-full px-4 pt-16">
        <div className="mx-auto flex h-[calc(100svh-64px)] max-w-[560px] items-center justify-center">
          <div className="w-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-md sm:p-8">
            <h1 className="text-center font-[Kanit] text-3xl font-extrabold uppercase leading-tight text-[#111111] md:text-4xl">
              Thank you!
            </h1>

            <div className="mx-auto mt-3 max-w-[420px] text-left text-sm leading-6 text-neutral-600 md:text-base">
              You’re all set for your tour at <strong>{locationName || "N/A"}</strong>. Your tour has been
              confirmed for:
              <br />
              <div className="flex items-center gap-1 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#525252" viewBox="0 0 256 256">
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
                </svg>
                <div className="mr-1 font-bold">Date:</div>
                <div>
                  {date
                    ? new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "N/A"}
                </div>
              </div>
              <div className="flex items-center gap-1 pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#525252" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                </svg>
                <div className="mr-1 font-bold">Time:</div>
                <div>
                  {time
                    ? new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "N/A"}
                </div>
              </div>
              We're excited to show you around.
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="https://evolvestrength.ca"
                className="inline-flex w-full max-w-[420px] items-center justify-center rounded-lg bg-brand-green px-6 py-3 text-center font-semibold text-white transition hover:brightness-95 active:brightness-90"
              >
                BACK&nbsp;TO HOME
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
