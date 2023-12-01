import random
import json

job_titles = ["Software Engineer", "Data Scientist", "UI Developer", "Electrical Engineer"]
locations = ["Gurgaon", "Bangalore", "Hyderabad", "Pune", "Gandhinagar"]
work_modes = ["Hybrid", "Remote", "Office"]
educations = ["BTech", "MTech", "PhD"]
companies = ["Sprinklr"]
skills =["c++","python","java","AD","WD"]
industry_type=["part time","intern","full time"]
jobs = []
xyz=[1 ,2 ,3]
experience=[1,0,2,4,5,3]

for i in range(27, 51):
    data= []
    dummy=[]
    for j in skills:
        dummy.append(j)
    for j in range(1 , random.choice(xyz) + 1):
        temp=random.choice(dummy)
        data.append(temp)
        dummy.remove(temp)
    job = {
        "id": i,
        "job_title": random.choice(job_titles),
        "company": random.choice(companies),
        "salary": random.randint(20, 200) * 1000,  # Salary is in multiples of 1000
        "location": random.choice(locations),
        "work_mode": random.choice(work_modes),
        
        "experience" : random.choice(experience),
        "role" : "coding",
        "skills": data,
        "industry_type": "IT",
        "employment_type":random.choice(industry_type),
        "perk":["travel expenses"],
        "last_date" : "2023-11-19",
        "company_email":"202101203@daiict.ac.in",
        "degree":random.choice(educations),
        "profile":"http://localhost:3000/file/1701459667234-image-sprinklr_image.png"
       
    }
    jobs.append(job)

# Convert the list of job dictionaries to a JSON-like string
job_data = [json.dumps(job) for job in jobs]

# Print the generated job entries with a comma after each object
for i, job in enumerate(job_data):
    if (i + 1) == len(jobs):
        print(job, end=" ")
    else:
        print(job, end=", ")
    if (i + 1) % 5 == 0:
        print()  # Add a new line every 5 objects
