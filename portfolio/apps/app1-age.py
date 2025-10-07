from datetime import date
def calculated(bir):
    today = date.today()
    return ((today.year - bir.year) + ((today.month - bir.month) / 12) + ((today.day - bir.day) / 365.25))

print("Enter date as(DD/MM/YYYY)", calculated(date(2001, 9, 30)), "years")
