import React from "react";

function Contact() {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold text-primary mb-8">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text">Message</label>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default React.memo(Contact);