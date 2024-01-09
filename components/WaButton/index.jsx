const WaButton = () => {
  const sendMessage = () => {
    const phoneNumber = "6281259869041";
    const message = "Halo! Saya tertarik dengan layanan Anda.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <button
        className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        onClick={sendMessage}
      >
        Hubungi Kami
      </button>
    </>
  );
};

export default WaButton;
