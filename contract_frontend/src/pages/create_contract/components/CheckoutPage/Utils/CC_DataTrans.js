export function CC_DataTrans(props) {

    //const kk = JSON.parse(props);
    const kk = props

    console.log(kk.buyer_contact_email)
        //kk.review_date = kk.review_date.split('T')[0]


    kk.contract_number = "CTR" + Math.floor(1000 + Math.random() * 90000000);



    kk.commencement_date = kk.commencement_date.split('T')[0]
    kk.contract_expiry = kk.contract_expiry.split('T')[0]
    kk.price_review_date ? kk.price_review_date = kk.price_review_date.split('T')[0] : kk.price_review_date
    kk.review_date ? kk.review_date = kk.review_date.split('T')[0] : kk.review_date



    kk.site = kk.site.join(',')
    kk.divisions = kk.divisions.join(',')
    kk.department = kk.department.join(',')
    kk.category1 = kk.category1.join(',')
    kk.category2 = kk.category2.join(',')
    kk.category3 = kk.category3.join(',')
    kk.business_unit = kk.business_unit.join(',')
    kk.regions = kk.regions.join(',')
    kk.contract_status = 'pending'
    kk.created_by = 1
    kk.contract_value = parseFloat(kk.contract_value)
    kk.date_signed = null


    // kk.created_date = new Date()
    //     //  kk.created_date = Intl.DateTimeFormat("en-US").format(new Date(kk.created_date))
    // kk.created_date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(kk.created_date);
    // kk.created_date = kk.created_date.split('/')[2] + '-' + kk.created_date.split('/')[0] + '-' + kk.created_date.split('/')[1]

    // kk.modified_date = ''
    // kk.location_of_hardcopy_contract = ''
    // kk.contract_form = ''
    // kk.created_by = '1'
    // kk.modified_by = '1'
    console.log(kk)
    console.log(kk.commencement_date)

    return kk

}