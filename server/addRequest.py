import pandas as pd 

def addRequest(firstName,lastName,phoneNumber,income,typeOfEmployment):# Creating the first Dataframe using dictionary 
    isThere = False
    
    # Creating the first Dataframe using dictionary 
    df1 = pd.read_csv('./requests.csv')
    
    try:
        first_name = firstName
        last_name = lastName
        phone_number = phoneNumber
        type_of_employment = typeOfEmployment
        income = income

        print(first_name,last_name,phone_number,type_of_employment,income)
    
        if( first_name == '' or last_name == '' or phone_number == ''):
            invalid = "invalid"
            return invalid
    
    except ValueError:
        error = "one or more values have not been intered"
        return error
    
    for index, row in df1.iterrows(): 
        #print(row['firsName'], row['lastName']) 
        if str(row['first_name']) == str(first_name) and str(row['last_name']) == str(last_name) and str(row['phone_number']) == str(phone_number):
            # then update all values here
            isThere = True# Creating the Second Dataframe using dictionary 
            break
    if not isThere: 
        df2 = pd.DataFrame({ 
        "first_name": [first_name], 
        "last_name": [last_name],
        "phone_number": [phone_number], 
        "type_of_employment": [type_of_employment],
        "income": [income]
     })
        print(type(df1),type(df2))

        dff = df1._append(df2, ignore_index = True)
        dff.to_csv(r'./requests.csv', index = False)
        
        add = "added"
        return add
    
    else:
        df1.to_csv(r'./requests.csv', index = False) 
        update = "updated"
        return update