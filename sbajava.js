// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  
  // Filter out the future assignments 
    const today = "2023-12-31"; // Create a date that helps me filter the future assignment.
    const includedAssignments = AssignmentGroup.assignments.filter(a => new Date(a.due_at) <= today); 
   //this array "includedAssignments" will include all the assignments from the Assignment group, using the filter to go throught the "due dates" to only include the assignments' due dates that are before the "today" date.

   // console.log(includedAssignments);
    let futureAssignment= Number(AssignmentGroup.assignments[2].due_at.substring(0,4))
    let year= Number(today.substring(0,4))
    let dueAssignments=[]
    // console.log(day,futureAssignment)

    let compareDates= () => {
        AssignmentGroup.assignments.forEach((assignment)=> {
            // console.log(assignment.due_at)
            let number= Number(assignment.due_at.substring(0,4))
           
            if (year >= number) {
                //assignment is due, add it to a new array
                dueAssignments.push(assignment)

            }else (
                //assingment is not due, we dont care 
                console.log("not due")
            )
        })
    }

    compareDates()
    // console.log(dueAssignments)

   
    //now i am trying to go through the learner submissions so we can match them wsith the student IDs 
    
    const learnerScores={ } //this array is where the learner scores will be stored 

    let learnerId= submission.learner.id;
    let assignmentId=submission.assignment_id; 
    let score = submission.submission.score; 

    let calculateLearnerScores=()=>{
      validSubmissions.forEach((submission)=> {
       
      }
    }

// im extremely stuck here. I had the idea of trying to match ids of the students with the assignments scores of the valid assigments that i initally filtered out, but i am struggling on how to get there. 
