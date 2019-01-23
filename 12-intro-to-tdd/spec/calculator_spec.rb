require_relative './spec_helper.rb'

describe Calculator do

  describe '#add' do

    it 'returns the sum of two numbers' do
      # setup
      calc = Calculator.new

      # trigger / execution
      sum = calc.add(10, 15)

      # expectation/verification
      expect(sum).to eq(25)
      # teardown
    end
    it 'returns the sum of any two numbers' do
      # setup
      calc = Calculator.new

      # trigger / execution
      sum = calc.add(4, 7)

      # expectation/verification
      expect(sum).to eq(11)
      # teardown
    end

  end

  describe '#factorial' do
    it 'returns 1 if given 0' do
      calc = Calculator.new

      expect(calc.factorial(0)).to eq(1)

    end

    it 'returns the product of all numbers multipled from 1 to the number' do
      calc = Calculator.new

      expect(calc.factorial(5)).to eq(120)
    end
  end





end
