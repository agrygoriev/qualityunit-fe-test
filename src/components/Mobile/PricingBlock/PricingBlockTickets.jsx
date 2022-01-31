import TicketIcon from 'assets/pricing-icon-ticket-2.svg';
import TicketChatIcon from 'assets/pricing-icon-ticketchat.svg';
export default function PricingBlockTickets () {
  return (
    <div className="pricing-block-tickets">
      <div className="pricing-block-tickets-item">
        <img src={TicketIcon} alt="" className="pricing-block_icon" />
        <h3>Ticket</h3>
        <p>For Small Businesses and Entrepreneurs</p>
        <p><strong>$15 / mo</strong></p>
        <a href="/" className="button button-outline">
          <span>Try it</span>
        </a>
      </div>
      <div className="pricing-block-tickets-item">
        <img src={TicketChatIcon} alt="" className="pricing-block_icon" />
        <h3>Ticket+Chat</h3>
        <p>For Medium-sized Businesses and Professional Agencies</p>
        <p className='price'><strong>$29 / mo</strong></p>
        <a href="/" className="button button-outline">
          <span>Try it</span>
        </a>
      </div>
    </div>
  )
}
