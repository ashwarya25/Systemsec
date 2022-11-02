function tagHOFields() {
    const fs = require('fs');

    fs.readFile('homeowners.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let customers = JSON.parse(data);
        let cInfo = [];

        for (var i = 0; i < customers.length; i++) {
            let employer = customers[i].employer + "[qsi]";
            let payslip = customers[i].payslip + "[hsi]";
            let employmentstatus = customers[i].employmentstatus + "[qsi]";
            let nationalinsurancenumber = customers[i].nationalinsurancenumber + "[hsi]";
            let currentaddress = customers[i].currentaddress + "[hsi]";
            let previousaddress = customers[i].previousaddress + "[hsi]";
            let ageofproperty = customers[i].ageofproperty + "[lsi]";
            let energyrating = customers[i].energyrating + "[lsi]";
            let counciltaxband = customers[i].counciltaxband + "[qsi]";
            let student = customers[i].student + "[qsi]";
            let healthstatus = customers[i].healthstatus + "[hsi]";
            let existingloan = customers[i].existingloan + "[hsi]";
            let tenant = customers[i].tenant + "[qsi]";
            let drivinglicence = customers[i].drivinglicence + "[hsi]";
            let livingwithpartner = customers[i].livingwithpartner + "[qsi]";
            let fostercarer = customers[i].fostercarer + "[qsi]";
            let spousalmaintenanceincome = customers[i].spousalmaintenanceincome + "[hsi]";
            let city = customers[i].city + "[qsi]";
            let ethnicity = customers[i].ethnicity + "[qsi]";
            let propertytype = customers[i].propertytype + "[lsi]";
            let norooms = customers[i].norooms + "[lsi]";
            let totalfloorarea = customers[i].totalfloorarea + "[lsi]";
            let carer = customers[i].carer + "[si]";
            let socialtenant = customers[i].socialtenant + "[lsi]";
            let pensioner = customers[i].pensioner + "[qsi]";
            let nochildren = customers[i].nochildren + "[qsi]";
            let totalamountinbank = customers[i].totalamountinbank + "[hsi]";
            let fullname = customers[i].fullname + "[hsi]";
            let dateofbirth = customers[i].dateofbirth + "[qsi]";
            let bankaccountno = customers[i].bankaccountno + "[hsi]";
            let creditcardno = customers[i].creditcardno + "[hsi]";
            let accountbalance = customers[i].accountbalance + "[hsi]";
            let disabilityallowance = customers[i].disabilityallowance + "[hsi]";
            let citizenship = customers[i].citizenship + "qhsi]";
            let email = customers[i].email + "[si]";
            let obj={
                employer: employer,
                payslip: payslip,
                employmentstatus: employmentstatus,
                nationalinsurancenumber: nationalinsurancenumber,
                currentaddress:currentaddress,
                previousaddress:previousaddress,
                ageofproperty:ageofproperty,
                energyrating:energyrating,
                counciltaxband:counciltaxband,
                student:student,
                healthstatus:healthstatus,
                existingloan:existingloan,
                tenant:tenant,
                drivinglicence:drivinglicence,
                livingwithpartner:livingwithpartner,
                fostercarer:fostercarer,
                spousalmaintenanceincome:spousalmaintenanceincome,
                city:city,
                ethnicity:ethnicity,
                propertytype:propertytype,
                norooms:norooms,
                totalfloorarea:totalfloorarea,
                carer:carer,
                socialtenant:socialtenant,
                pensioner:pensioner,
                nochildren:nochildren,
                totalamountinbank:totalamountinbank,
                fullname:fullname,
                dateofbirth:dateofbirth,
                bankaccountno:bankaccountno,
                creditcardno:creditcardno,
                accountbalance:accountbalance,
                disabilityallowance:disabilityallowance,
                citizenship:citizenship,
                email:email
    
    
    
            };
            cInfo.push(obj);

        };

        // creating a new json file
        const Info = JSON.stringify(cInfo)

        // write JSON string to a file
        fs.writeFile('taggedhomeowners.json', Info, err => {
            if (err) {
                throw err
            }
            console.log('JSON data is saved.')
        })
        console.log(cInfo);
    })
}

tagHOFields();