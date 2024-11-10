import pandas as pd 

def addRequest(firstName,lastName,phoneNumber):# Creating the first Dataframe using dictionary 
    isThere = False
    
    # Creating the first Dataframe using dictionary 
    df1 = pd.read_csv('./requests.csv')
    
    try:
        firstName = firstName
        lastName = lastName
        phoneNumber = phoneNumber
        
        print(firstName,lastName,phoneNumber)
    
        if( firstName == '' or lastName == '' or phoneNumber == ''):
            invalid = "invalid"
            return invalid
    
    except ValueError:
        error = "one or more values have not been intered"
        return error
    
    for index, row in df1.iterrows(): 
        print(row['firsName'], row['lastName']) 
        if str(row['firstName']) == str(firstName) and str(row['lastName']) == str(lastName) and str(row['phoneNumber']) == str(phoneNumber):
            # then update all values here
            isThere = True# Creating the Second Dataframe using dictionary 
    
    if isThere != True: 
        df2 = pd.DataFrame
        ({
        "firsName":[firstName], 
        "lastName":[lastName], 
        "phoneNumber":[phoneNumber]
        }) 
    
        dff = df1.append(df2, ignore_index = True)
        dff.to_csv(r'./requests.csv', index = False)
        
        add = "added"
        return add
    
    else:
        df1.to_csv(r'./requests.csv', index = False) 
        update = "updated"
        return update