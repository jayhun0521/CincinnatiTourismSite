import React from 'react'
import image1 from './photos/google_store_logo-removebg-preview.png'
import image2 from './photos/apple_store_logo-removebg-preview.png'

const Footer = () => {
  return (
    <section id="footer" className='mt-3 bg-dark'>
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5 className='mt-5'><span style={{color: 'white'}}>Download the App</span></h5>
            <ul class="list-unstyled quick-links">
              <li><img src={image1} height={100} alt="Google Play Store" /></li>
              <li><img src={image2} width={100} alt="Apple Store" /></li>
              <li><a href="https://play.google.com/store/games?utm_source=na_Med&utm_medium=hasem&utm_content=Jul0722&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-us-1000189-Med-hasem-py-Evergreen-Jul0722-Text_Search_BKWS-id_101963_%7CEXA%7CONSEM_kwid_43700074148358954&gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke4fT8v7I_CAJELKrvmmFg6DZ_D579iH3Dy8YFqkan3aaeWJV930GN8aAoXoEALw_wcB&gclsrc=aw.ds&pli=1" ><i className="fa fa-angle-double-right"></i>Google Play Store</a></li>
              <li><a href="https://www.apple.com/store?afid=p238%7CsHI7bHWVr-dc_mtid_1870765e38482_pcrid_634084367716_pgrid_13945964767_pntwk_g_pchan__pexid__&cid=aos-us-kwgo-brand-apple-store--slid---product-" ><i className="fa fa-angle-double-right"></i>Apple Store</a></li>
            </ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5 className='mt-5'><span style={{color: 'white'}}>Quick links</span></h5>
            <ul className="list-unstyled quick-links">
              <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i>Attractions</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i>Add Attractions</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i>Contact Us</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i>Videos</a></li>
            </ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5 className='mt-5'><span style={{color: 'white'}}>Useful links</span></h5>
					<ul className="list-unstyled quick-links">
						<li><a href="https://www.citybeat.com/"><i className="fa fa-angle-double-right"></i>City Beat</a></li>
						<li><a href="https://www.earthcam.com/usa/ohio/cincinnati/?cam=cincinnati"><i className="fa fa-angle-double-right"></i>Earth Cam- Cincinnati</a></li>
						<li><a href="https://www.cincinnati.com/"><i className="fa fa-angle-double-right"></i>Cincinnati.com</a></li>
						<li><a href="hhttps://www.wlwt.com/"><i className="fa fa-angle-double-right"></i>WLWT- News 5</a></li>
						<li><a href="https://www.youtube.com/watch?v=8SHPzcx596A" title="Design and developed by"><i className="fa fa-angle-double-right"></i>YouTube</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>Welcome to Cincinnati, 2022</p>
					<p className="h6">© All right Reversed.</p>
				</div>
				<hr/>
			</div>
      </div>	
	</section>
  )
}

export default Footer