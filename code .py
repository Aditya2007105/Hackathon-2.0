# Calculator which calculate the total monthly and yearly savings of a students:

# Monthly_Poket_Money = P

# Monthly_Side_Earning = E

# Monthly_Spends = S

# Monthly_Investment = I 

# Previous_Month_Savings = SAVE
while True:
    P = float(input("Enter Monthly Poket Money:"))
    E = float(input("Enter Monthly Side Earning:"))
    S = float(input("Enter Monthly Spends:"))
    I = float(input("Enter Monthly Investment:"))
    SAVE = float(input("Enter Previous Month Saving:"))
    print()
    Monthly_total_income = (P+E)
    print("Monthly_total_income:",Monthly_total_income)
    print()
    Monthly_total_spends = (S)
    print("Monthly_total_spends:",Monthly_total_spends)
    print()
    Monthly_total_Investment = (I)
    print("Monthly_total_Investment:",Monthly_total_Investment)
    print()
    Previous_Month_Savings = (SAVE)
    print("Previous_Month_Savings:",Previous_Month_Savings)
    print()
    Total_Amount_saved_in_a_month = ((Monthly_total_income+Previous_Month_Savings)-(Monthly_total_spends+Monthly_total_Investment))
    print("Total_Amount_saved_in_a_month:",Total_Amount_saved_in_a_month)
    print()
    Total_Amount_saved_in_a_year = (Total_Amount_saved_in_a_month*365)
    print("Total_Amount_saved_in_a_year:",Total_Amount_saved_in_a_year)
print()