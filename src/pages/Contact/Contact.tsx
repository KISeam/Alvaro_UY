const Contact: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#F9F9F9] px-4 pt-36 pb-20">
          <div className="max-w-[839px] mx-auto">
            <div className="border border-[#CACACA] rounded-xl bg-white">
              <div className="text-center text-[#CBA65F] py-3.5 border-b border-[#C5C5C5]">
                <h1 className="text-xl md:text-3xl">Contact From</h1>
              </div>
              <div className="py-6 space-y-6 px-3">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <h3 className="md:text-lg">Name</h3>
                    <input
                      type="text"
                      className="w-full py-3 px-4 rounded-xl focus:outline-none border border-[#C5C5C5] text-[#667085]"
                      placeholder="Enter your name*"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="md:text-lg">Email</h3>
                    <input
                      type="text"
                      className="w-full py-3 px-4 rounded-xl focus:outline-none border border-[#C5C5C5] text-[#667085]"
                      placeholder="Enter your name*"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <h3 className="md:text-lg mb-2 text-slate-800">
                      Select Country
                    </h3>
                    <div className="relative">
                      <select
                        className="w-full appearance-none py-3 px-4 pr-10 rounded-xl border border-[#C5C5C5] text-[#667085] focus:outline-none focus:border-slate-400 bg-white"
                        defaultValue=""
                        aria-label="Select Country"
                      >
                        <option value="" disabled>
                          Select Country
                        </option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="BD">Bangladesh</option>
                        <option value="IN">India</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="w-full">
                    <h3 className="md:text-lg mb-2 text-slate-800">Phone no</h3>
                    <div className="flex items-stretch rounded-xl border border-[#C5C5C5] bg-white focus-within:border-slate-400">
                      <div className="relative">
                        <select
                          className="appearance-none h-full rounded-l-xl pl-4 pr-8 py-3 text-[#667085] bg-transparent focus:outline-none"
                          defaultValue="US"
                          aria-label="Phone country"
                        >
                          <option value="US">US</option>
                          <option value="GB">UK</option>
                          <option value="CA">CA</option>
                          <option value="BD">BD</option>
                          <option value="IN">IN</option>
                        </select>
                        <svg
                          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="my-2 w-px bg-[#C5C5C5]" />
                      <input
                        type="tel"
                        inputMode="tel"
                        placeholder="+1 (555) 000-0000"
                        className="flex-1 py-3 px-3 rounded-r-xl focus:outline-none text-[#667085] placeholder-[#667085]"
                        aria-label="Phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="md:text-lg">Message</h3>
                  <textarea
                    name="message"
                    className="w-full py-3 px-4 rounded-xl focus:outline-none border border-[#C5C5C5] text-[#667085] h-[230px]"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-[#CBA65F] py-3 px-14 rounded-xl text-white cursor-pointer">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
