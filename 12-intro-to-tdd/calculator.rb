class Calculator

  def add(x, y)
    x + y
  end

  def factorial(n)
    if n == 0
      1
    else
      (1..n).to_a.inject do |total, num|
        total * num
      end
    end
  end
end
