      <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
                        {/* Logos Section */}
                        <div className="flex mb-8">
                            <Image
                                src="/achc-logo.png"
                                alt="ACHC"
                                width={90}
                                height={90}
                                className="object-contain"
                            />
                            <Image
                                src="/medicare-logo.png"
                                alt="Medicare Certified Homehealth Agency"
                                width={194}
                                height={68}
                                className="object-contain"
                            />
                        </div>

                        {/* Contact Information */}
                        <div className="text-center md:text-right">
                            <h3 className="text-neutral-500 tracking-widest text-sm font-semibold mb-2">
                                GET IN TOUCH
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-4 text-neutral-600 mb-6">
                                <p className="max-w-md mx-auto md:ml-auto">
                                    Service Areas Covered: {serviceAreas.join(", ")} counties in California.
                                </p>

                                <div className="flex flex-col items-center md:items-end gap-3 mt-6">
                                    <div className="flex items-start gap-2 justify-center md:justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600 shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <p>{contactInfo.address}</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <p>Call Us at: {contactInfo.phone}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-primary-600">Fax:</span>
                                            <p>{contactInfo.fax}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <p>Email Us at: {contactInfo.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>