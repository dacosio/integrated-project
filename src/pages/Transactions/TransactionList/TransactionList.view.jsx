import Typography from "../../../components/base/Typography/Typography";
import PageTabs from "../../../components/base/PageTabs/PageTabs";
import TransactionCard from "../../../components/base/TransactionCard/TransactionCard";
import { useNavigate } from "react-router-dom";
import SelectDropdown from "../../../components/base/SelectDropdown/SelectDropdown";
import style from "./TransactionList.module.css";

const TransactionList = (props) => {
  const {
    orderStatus,
    setOrderStatus,
    orderTypeOptions,
    onCancel,
    onDecline,
    onAccept,
    onComplete,
    orderResults,
    onChange,
    orderType,
    orderTabs,
    handleTabChange,
  } = props;
  const navigate = useNavigate();

  return (
    <div className="orders-list">
      <div className="title-wrapper">
        <Typography variant="h3-graphik-bold">Orders</Typography>
        <SelectDropdown
          options={orderTypeOptions}
          onChange={onChange}
          searchable={false}
        />
        <PageTabs tabs={orderTabs} onTabChange={handleTabChange} />
      </div>

      <div className="orders">
        {orderResults &&
          orderResults.map((o) => {
            const today = new Date();
            let updatedAt = new Date(o.updatedAt.toDate());
            updatedAt.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const timeDiff = today.getTime() - updatedAt.getTime();
            const days = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
            return (
              <TransactionCard
                key={o.id}
                type={o.orderType}
                itemName={o.name}
                time={days}
                orderType={orderType}
                portions={o.qty}
                splitterName={
                  orderType === "selling" ? o.splitteeName : o.splitterName
                }
                price={o.price}
                source={o.imageUrl}
                orderStatus={o.orderStatus}
                onCancel={() => onCancel(o.id, o.productId)}
                onDecline={() => onDecline(o.id, o.productId)}
                onAccept={() => onAccept(o.id, o.productId)}
                onComplete={() => onComplete(o.id, o.productId)}
                onClick={() =>
                  navigate(`/transaction/${o.id}`, { replace: true })
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default TransactionList;
