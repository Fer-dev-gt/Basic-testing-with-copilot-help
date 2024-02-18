import OrdersCard from "..";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("OrdersCard", () => {
    it('should render correctly', () => {
        const { container } = render(<OrdersCard totalPrice={100} totalProducts={3} />);
        expect(container).toMatchSnapshot();
    });

    it('should render the correct total price', () => {
        const { getByText } = render(<OrdersCard totalPrice={100} totalProducts={3} />);
        expect(getByText('$100')).toBeInTheDocument();
    });

    it('should render the correct total products', () => {
        const { getByText } = render(<OrdersCard totalPrice={100} totalProducts={3} />);
        expect(getByText('3 articles')).toBeInTheDocument();
    });

    // it('should render the correct date', () => {
    //     const { getByText } = render(<OrdersCard totalPrice={100} totalProducts={3} date='2021-01-01' />);
    //     expect(getByText('01.01.21')).toBeInTheDocument();
    // });

    it('should render the correctly when there is no articles', () => {
        const { getByText } = render(<OrdersCard totalPrice={100} totalProducts={0} />);
        expect(getByText('0 articles')).toBeInTheDocument();
    });
});