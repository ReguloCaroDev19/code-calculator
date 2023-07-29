import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ColorResistance from './ColorResistance';
import Swal from 'sweetalert2';

describe('Resistor', () => {
  window.alert = jest.fn();
  it('should render successfully', () => {
    const { baseElement } = render(<ColorResistance />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<ColorResistance />);
    expect(getByText('4 Band Resistor Color Code Calculator')).toBeTruthy();
  });
});
