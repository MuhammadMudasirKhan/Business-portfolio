import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Element } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";
export default function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "bg-aventus-navy min-h-screen", children: [_jsx(Nav, {}), _jsx(Element, { name: "home", children: _jsx(Home, {}) }), _jsx(Element, { name: "about", children: _jsx(About, {}) }), _jsx(Element, { name: "services", children: _jsx(Services, {}) }), _jsx(Element, { name: "contact", children: _jsx(Contact, {}) })] }) }));
}
