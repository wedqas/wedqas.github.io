from datetime import datetime

def calculate_age(born):
    today = datetime.today()
    print(today)
    print((today.year - born.year)*365)
    return float((today.year - born.year)*365 - ((today.month, today.day) < (born.month, born.day)))

print("Enter dob (YYYY-MM-DD):")
in1=input()
iny=int(in1[:4])
print(iny)
inm=int(in1[5:7])
print(inm)
ind=int(in1[8:])
print(ind)

inma=iny/12
print(inma)
inmb=inma
print(f"Age: {float((calculate_age(datetime(iny, inm, ind)))/(12*30))} years")
