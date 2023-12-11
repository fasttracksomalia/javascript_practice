class Employee {
    constructor(name, id, department, position, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.position = position;
      this.salary = salary;
    }
  
    // Getter method to retrieve employee details
    getDetails() {
      return `Employee Name: ${this.name}\nID: ${this.id}\nDepartment: ${this.department}\nPosition: ${this.position}\nSalary: ${this.salary}`;
    }
  
    // Method to give a raise to the employee
    giveRaise(raiseAmount) {
      this.salary += raiseAmount;
    }
  }
  
  // Usage example:
  const employee1 = new Employee("John Doe", 12345, "Engineering", "Software Developer", 60000);
  console.log(employee1.getDetails()); // Display employee details
  employee1.giveRaise(5000); // Give a raise of $5000
  console.log(`New Salary: $${employee1.salary}`);