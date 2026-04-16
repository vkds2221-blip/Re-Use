import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import CategoryPage from "@/pages/Category";
import Checkout from "@/pages/Checkout";
import AuthPage from "@/pages/Auth";
import SellQuote from "@/pages/SellQuote";
import SellerDashboard from "@/pages/SellerDashboard";
import TradeIn from "@/pages/TradeIn";
import About from "@/pages/about";
import Support from "@/pages/support";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/category" component={CategoryPage} />
      <Route path="/product" component={ProductDetail} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/sell/quote" component={SellQuote} />
      <Route path="/sell/list" component={SellerDashboard} />
      <Route path="/sell/trade" component={TradeIn} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
