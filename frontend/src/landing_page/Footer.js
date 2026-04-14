import React from 'react';
function Footer() {
    return ( 
        <footer className='border-top' style={{ backgroundColor: "rgb(250, 250, 250)"}}>
        <div className='container mt-5'>
            <div className='row mt-5 '>
                <div className='col '>
                    <img src='media/images/logo.svg' style={{width: "50%"}}/>
                    <p className='mt-3 text-small text-muted'>
                        &copy; 2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.
                    </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href='' className=' text-small text-muted' style={{textDecoration:"none"}}>About</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Products</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Pricing</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Referral programme</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Careers</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Zerodha.tech</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Press & media</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Zerodha Cares (CSR)</a>
                    <br /><br />
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Contact</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Support portal</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Z-Connect blog</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>List of charges</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Downloads & resources</a>
                    <br /><br />
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Open an account</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>Fund transfer</a>
                    <br /><br />
                    <a href='' className='text-small text-muted' style={{textDecoration:"none"}}>60 day challenge</a>
                    <br /><br />
                </div>
            </div>
            <diV className='mt-5 text-small text-muted' style={{ fontSize: "16px" }}>
            <p>
                Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>

            <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>

            <p>
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>

            <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
            </diV>
        </div>
        </footer>
    );
}

export default Footer;