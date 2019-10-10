import { Component, OnInit } from '@angular/core';

//importing route related code

import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
//variable to store the blog being called
  public currentBlog;

   public allBlogs=[
{"blogId":"1",
"created":"2019 october",
"tags":["serious","Indian Society","Civics"],
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":`Reasons of Social Problems:

But the very same complexity brings with itself complex nature of social problems and issues. In fact every society of the world has their social issues unique to their society. So does Indian society. Indian society is very rooted in religious beliefs; there are people of different religious beliefs such as Hindus, Muslims, Jains, Sikhs, Parsis etc. These all adds to the socio-cultural varieties of the country. India’s social problems are also rooted in the religious practices and beliefs of it people. Almost all forms of social issues and problems find their origin in the religious and cultural practices of the people of India. These social problems are developed in a long period of times and are still continuing in one form or other.

Furthermore, India has witnessed several wars of large proportions; several foreign invaders attacked India in its long history among whom few made this country as their own and tried to force their socio-religious practices which also deteriorated social conditions; the long period of British rule crippled the country and had thrown it into backwardness. Thus, many such reasons may be cited for India’s social problems but the fact remains that we have these issues and only we can solve them.

FORMS OF SOCIAL ISSUES IN INDIA
Poverty

Poverty is a condition in which a household is not able to fulfill its basic needs for survival i.e. food, clothing and shelter. Poverty is a widespread condition in India. Since Independence, poverty is a prevalent concern. It is the twenty-first century and poverty still is a persistent menace in the country. India happens to be country wherein the disparities between the haves and the have-notes are extremely wide. It needs to be taken into account that although the economy has shown some visible signs of progress in the last two decades, this progress been uneven across various sectors or areas. The growth rates are higher in Gujarat and Delhi as compared to Bihar and Uttar Pradesh. Nearly half of the population doesn’t have proper shelter, access to a decent sanitation system, villages do not have a nearby water source, and villages also do not have a secondary school and lack of proper roads. Some sections of the society like the Dalits are not even included in the poverty list maintained by the concerned authorities assigned by the government. They’re groups that are marginalized in the society.

The element which further complicates and deteriorates the situation is the government subsidies system which has leakages in the distribution system. They never reach the households.

Illiteracy

Illiteracy is a condition which becomes a blot on the development of nation. India possesses the largest illiterate population. Illiteracy in India is a problem which has complex dimensions attached to it. Illiteracy in India is more or less concerned with different forms of disparities that exist in the country. There are gender imbalances, income imbalances, state imbalances, caste imbalances, technological barriers which shape the literacy rates that exist in the country. The Indian government though has launched several schemes to combat the menace of illiteracy but due to the poor conditions of sanitation and expensive private education and defective mid-day meal schemes, illiteracy still prevails. Not only the government, but every literate person needs to accept the eradication of illiteracy as a personal goal. Each and every contribution by a literate person can make a contribution to eradicate the menace.


 
 

Child Marriage

According to the United Nations report, India has the second highest number of child marriages. Marriage is considered to be a sacred union between two mature and consenting individuals who are ready to accept each other and share responsibilities for a lifetime. With respect to this context, child marriages happen to be an unsound institution. Child marriage mars the innocence of childhood. The Indian Constitution provides for prohibitions against child marriage through various laws and enactments. The first law that was designed was the Child Marriage Restraint Act of 1929 which extended to the whole of India except Jammu and Kashmir. This act defines the ages of an adult male and female. Also, sex with minors is a criminal offence under Section 376 of the Indian Penal Code. Proper media sensitization is required for a major change to take place. While on one hand, it is stated that child marriage will still take nearly fifty years to be eradicated, genuine efforts, strict enforcements of the legal provisions and change the scenarios to a great extent.

Starvation

Starvation is a condition characterized by the deficiency in calorie energy intake and is a serious form of malnutrition which ultimately leads to death if not taken care about. Historically, starvation has been constant across various human cultures apart from India. Starvation can take place in a country due to many reasons like war, famine, the disparities between the rich and the poor and so on. Malnutrition conditions like kwashiorkor and marasmus can also develop into serious causes of starvation. Generally, the conditions of kwashiorkor and marasmus arise when people are taking diets which are not rich in nutrients (proteins, vitamins, minerals, carbohydrates, fats and fiber). In the context of India, it becomes needless to say that the food distribution system is flawed. The Supreme Court has issued orders over the past decades directing the government to take measures like mid-day meal schemes and the provision of health care schemes for pregnant and lactating women. The National Food Security Bill which has become a landmark act does seem to show promises with respect to its measures of the identification of the poor and the needy, redressal mechanisms for grievances and children’s entitlements. But, this bill also is not without its cons. Clear mechanisms with respect to the identification of beneficiaries have not been defined. The indicators of the poor need to be made specific. They are vague in description.

Child Labour

Child labour typically means the employment of children in any work with or without payment. Child labour is not only limited to India, it happens to be a global phenomenon. As far as India is concerned, the issue is a vicious one as children in India have historically been helping parents at their farms and other primitive activities. Over population, illiteracy, poverty, debt trap are some of the common causes which are instrumental in this issue. Overburdened, debt-trapped parents fail to understand the importance of a normal childhood under the pressures of their own troubles and thus it leads to the poor emotional and mental balance of a child’s brain which is not prepared to undertake rigorous field or domestic tasks. Multinational companies also recruit children in garment industries for more work and less pay which is absolutely unethical. Child labour as a global concern has been raised on international platforms as well. Abolition of child trafficking, elimination of poverty, free and compulsory education, and basic standards of living can reduce the problem to a great extent. The World Band, International Monetary Fund can help in eradicating poverty by providing loan to the developing countries. Strict implementation of labour laws is also essential in order to prevent exploitation by parties or multinational companies.

Homosexuality

Homosexuality is still considered a ‘taboo’ in India. India today is one of the fastest developing nations with impressive economic growth rates. But is the growth rate enough to imply that India is a developing nation. A nation is also characterized by the way it treats its people. With respect to this prerogative, the way India looks at homosexuality is certainly not the way to look at it. Homosexuality is considered as a disease by most sections of the society and there are only a few sections of the society who welcome homosexuality. Homosexuality thus is also regarded as a criminal offence in India. Homosexuality is a ‘criminal offence’ under Section 377 of the Indian Penal Code dating back to 1861 with punishments up to ten years which makes it all the more hard to believe that India is a progressive nation and that we are the 21st century  inhabitants of the country. Although, this subject did see the light of the day when the Delhi High Court legalized gay sex among consenting adults holding that making it a criminal offence violates fundamental human rights way back in the year 2009 as a result of persuasive struggles carried out by Gay Rights activists and foundations.


 
 

In December 2013, the Supreme Court passed a controversial order making gay sex illegal quashing the Delhi High Court’s decision on the matter. In January 2014, the Supreme Court also refused to review the petition against its order on gay sex being criminalized. Needless to remark, the refusal drew flak internationally for violating fundamental rights. To sum up, homosexuality needs tolerance both by the country and its citizens. It is certainly not a disease hence it doesn’t require any treatment. According to my viewpoint, the organizations which have been instrumental with the emancipation of the LGBT community (Example- Naz Foundation) should continue with their protests because slowly but surely people are changing their perceptions towards this subject.

Other varied forms of social problems related to issues such as Casteism, Untouchability, Bonded Labour, Gender Inequality, Dowry, Domestic Violence against Women, Sexual Violence against Women, Child Sexual Abuse, Communalism, Religious Violence, Issues related to SC/STs, Marital Rape, Sexual Harassment of Women at Workplace, Child Trafficking , Overpopulation etc.

The list may go on and it is not a comprehensive list. There are several other social issues and problems ailing the country but above mentioned ones are really pressing issues which need immediate attention.

It is not so that social ills have not been fought with; in fact from the ancients times in our country there have been various social-cultural reformers such as Budha, Mahavira, Kabir, Gurunanak, Raja Ram Mohun Roy, Mahatma Gandhi, Dr. Ambedkar, Vinoba Bhave etc who have tried to fight those evils throughout their lives; they have succeeded also to a certain extent. But still the country is facing these socio-cultural problems in various degrees which is an unfortunate reality of 21st century India.

Present Scenario:

We try to present our country as a modern, forward looking nation of the world and it’s true that India is making strides in the world as a nation with encouraging developments in scientific, economic and technological fields, but as far as social developments are concerned it is still one of the lowest ranked countries of the world. India’s Human Development Index (HDI) rank for 2013 is 135 out of 187 countries of the world which are listed in the report. This shows the sorry state of affairs as far as India’s situation on social indicators is concerned. This also shows that we as a society are still people of orthodox beliefs in a negative sense who do not want to believe in the concept of equality and brotherhood of all.

Though several Governmental and non-governmental (NGOs) bodies are working towards improving the existing situation in the social fields but results are not very encouraging. Perhaps the problem lies in the very deep rooted beliefs in the minds of people of the country which is not letting the situation to change. For instance: the issue of Female Feticides is one of the shameful practices in our country. Though there are various prohibitory measures the Government and NGOs have taken but the practice is continuing. The real reason for this is the Patriarchy system of society of our country which considers male as the superior authority and women as subordinate to them. Therefore, very strong desire of having a male child in comparison to female child led to the shameful practice of female feticides. Thus, it is belief system or the cultural conditioning of the people which is not letting the society to change at a fast pace.

Though there have been several positive changes in the society such as now girls are also going to school in vast majority and their employment ratio is also increasing; illiteracy as whole is decreasing; conditions of SC/STs are also improving etc but situation is far from satisfactory.

We witness inequality against women in our own homes, sexual violence against women can be heard on daily basis, female feticide is continuing, religious-communal violence is on the rise, untouchabilty is still a reality, child labor is widely practiced etc.

Therefore, there is a lot needs to be done for the situation to improve. And without changing the mind set and beliefs of the people it is a very difficult task. For this purpose educating people about various social problems and sensitizing them towards changing their way of thinking is the best way forward. Because without people trying to change themselves, any governmental or non-governmental efforts will prove as a half-measure. If we want to make India as a true world leader and a modern 21st country of the world, it is imperative that that we make an improvement on our social front.

In the next pages we will discuss some of the pressing and urgent social issues facing our country, their genesis, their outlook, efforts taken to fight them and present scenario etc.`,
"description":"This is the blog 1 description",
"title":"This is blog 1"
},
{"blogId":"2",
"created":"2019 october",
"tags":["humour","laughter"],
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"<h1>HEADING</h1><p>this is the body</p>",
"description":"This is the blog 2 description",
"title":"This is blog 2"
},
{"blogId":"3",
"created":"2019 october",
"tags":["humour","laughter"],
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"this is the body",
"description":"This is the blog 3 description",
"title":"This is blog 3"
}

  ];


  constructor(private _route:ActivatedRoute,private router:Router) {
    
    console.log("constructor called")
   }

  ngOnInit() {
    console.log("ngOnInit called")
    //getting the blogId from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.getBlogInformation(myBlogId);
  }

//function to feed blog info from allBlogs to currentBlog
public getBlogInformation(currentBlogId):any{
for (let blogx of this.allBlogs){
  if(blogx.blogId==currentBlogId)
  {this.currentBlog=blogx;}
}
console.log(this.currentBlog);
}

}