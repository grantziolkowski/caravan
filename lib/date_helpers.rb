module DateHelpers
  def format_date(input_date)
    "#{input_date.strftime('%b %d, %Y')}"
  end
end