
import regex as re
import json

def validation(firstName,lastName,phoneNumber):
    with open('patterns.json') as json_file:
        patterns = json.load(json_file)
        print(patterns["patterns"]["word"])
        if(not isValid(patterns["patterns"]["word"], firstName)):
            print("firstName not valid")
            return False
        if(not isValid(patterns["patterns"]["word"], lastName)):
            print("lastName not valid")
            return False
        if(not isValid(patterns["patterns"]["phone"], phoneNumber)):
            print("phone not valid")
            return False
    return True



def isValid(pattern,curr_input):
    try:
        # Check if the pattern contains Unicode property escapes
        unicode_pattern = r'\\' in pattern
        if unicode_pattern:
            # Compile the regular expression with the Unicode flag
            reg = re.compile(pattern, re.UNICODE)
        else:
            # Compile the regular expression without the Unicode flag
            reg = re.compile(pattern)
    except re.error as e:
        print(f"Invalid regex pattern: {pattern} - {e}")
        reg = re.compile(".*")
    
    if not re.match(reg, curr_input):
        print(curr_input," ",reg)
        return False
    else:
        return True
    
