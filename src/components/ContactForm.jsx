export default function ContactForm() {
    return (
        <form
            action=""
            className="bg-white "
        >
            {/* Name */}
            <div className="mb-5">
                <label htmlFor="name" className="block text-xl font-medium text-black">
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 w-full border border-gray-600 p-5 focus:border-gold outline-none"
                    placeholder="Enter your full name"
                />
            </div>

            {/* Email */}
            <div className="mb-5">
                <label htmlFor="email" className="block text-xl font-medium text-black">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 w-full border border-gray-600 p-5 focus:border-gold outline-none"
                    placeholder="you@example.com"
                />
            </div>

            {/* Phone */}
            <div className="mb-5">
                <label htmlFor="phone" className="block text-xl font-medium text-black">
                    Phone <span className="text-gray-400">(optional)</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    className="mt-1 w-full border border-gray-600 p-5 focus:border-gold outline-none"
                    placeholder="+234 801 234 5678"
                />
            </div>

            {/* Message */}
            <div className="mb-5">
                <label htmlFor="message" className="block text-xl font-medium text-black">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    rows="4"
                    required
                    className="mt-1 w-full border border-gray-600 p-5 focus:border-gold outline-none"
                    placeholder="How may we be of service ..."
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full lg:w-fit mt-5 py-3 px-5 lg:py-5 lg:px-10 bg-gold border-1 border-gold text-white text-lg lg:text-xl hover:bg-white hover:text-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition"
            >
                Send Message
            </button>
        </form>
    );
}
