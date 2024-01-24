import './App.css';
import CTASection from './components/CTASection';
import FaqsSection from './components/FAQS';
import Footer from './components/Footer';
import AppHeader from './components/appHeader';
import ClearLinkAdvantage from './components/clearLinkAdvantage';
import Companies from './components/companies';
import HeroSection from './components/heroSection';
import ShopifySection from './components/shopifySection';

function App() {
	return (
		<main className="App">
			<AppHeader />
			<HeroSection />
			<Companies />
			<ClearLinkAdvantage />
			<ShopifySection />
			<FaqsSection />
			<CTASection />
			<Footer />
		</main>
	);
}

export default App;
