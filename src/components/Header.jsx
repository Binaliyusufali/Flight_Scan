import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="./fl-logo.png" />
        <h2>Flight Scan</h2>
      </div>

      <h4>
        {store.isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : `${store.flights.length} Uçuş Bulundu`}
      </h4>
    </header>
  );
};

export default Header;
