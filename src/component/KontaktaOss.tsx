import React from "react";

const ContactDetails = [
  {
    name: "Försäljning Projektledning",
    contact: "Mikael Kull",
    mobileNumber: "+46706095715",
    mail: "mikael.kull@selm.se",
    href: "mailto:mikael.kull@selm.se",
  },
  {
    name: "Service Skåpsverkstad",
    contact: "Martin Pettersson",
    mobileNumber: "+46730719549",
    mail: "martin.pettersson@selm.se",
    href: "mailto:martin.pettersson@selm.se",
  },
  {
    name: "Service",
    contact: "Erik Mattsson",
    mobileNumber: "+46767739786",
    mail: "​erik.mattsson@selm.se",
    href: "mailto:​erik.mattsson@selm.se",
  },
];

const Entreprenad = [
  {
    contact: "Fredrik Larsson",
    mobileNumber: "+46735125826",
    mail: "fredrik.larsson@selm.se",
    href: "mailto:fredrik.larsson@selm.se",
  },
  {
    contact: "Joakim Larsson",
    mobileNumber: "+46761609777",
    mail: "​joakim.larsson@selm.se",
    href: "mailto:​joakim.larsson@selm.se",
  },
  {
    contact: "Kristoffer Lövgren",
    mobileNumber: "+46704008855",
    mail: "​kristoffer.lovgren@selm.se",
    href: "mailto:​kristoffer.lovgren@selm.se",
  },
  {
    contact: "Viktor Nilsson",
    mobileNumber: "",
    mail: "​viktor.nilsson@selm.se",
    href: "mailto:​viktor.nilsson@selm.se",
  },
];

function KontaktaOss() {
  return (
    <div className="py-5 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen border-t-gray-300 rounded-t-3xl">
      <h2 className="font-semibold text-gray-800 mb-6 text-center font-mono text-4xl">
        Kontakta Oss
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
        {ContactDetails.map((contact, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-600">{contact.name}</h3>
            <hr className="mt-1 mb-3 border-dashed" />
            <h2 className="font-mono font-bold">{contact.contact}</h2>
            <h2>Mobile Number: {contact.mobileNumber}</h2>
            <h2>
              Mail: <a className="text-blue-700" href={contact.href}>{contact.mail}</a>
            </h2>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-semibold text-red-600 mt-12 mb-6 text-center">
        Entreprenad
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Entreprenad.map((contact, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <h2 className="font-mono font-bold">{contact.contact}</h2>
            <h2>Mobile Number: {contact.mobileNumber}</h2>
            <h2>
              Mail: <a className="text-blue-700" href={contact.href}>{contact.mail}</a>
            </h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <form action="" className="w-full max-w-lg">
          <h3 className="text-xl font-medium text-red-700 mt-8">Kontakt formulär</h3>
          <label className="text-gray-700 font-medium flex">
            <p className="text-red-600">*</p> Indicates required field
          </label>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="name" className="flex">Name <p className="text-red-600">*</p></label>
            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label htmlFor="email" className="flex">Email <p className="text-red-600">*</p></label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label htmlFor="message" className="flex">Message <p className="text-red-600">*</p></label>
            <textarea id="message" name="message" className="border border-gray-300 rounded-md p-2 w-full"></textarea>
          </div>
          <button type="submit" className="bg-gray-800 text-white px-4 py-1 rounded-lg mt-6">
            Skicka
          </button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(KontaktaOss);
