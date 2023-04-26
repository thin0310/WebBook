import React from 'react'
import { useState } from 'react'
import { datasach } from '../../constants/darasach'
import { datacontent } from '../../constants/datacontent'
import "./Book.css"
import {AiFillLike} from "react-icons/ai"
import {FaShare} from "react-icons/fa";
import { dataComment } from '../../constants/datacoment'
import { Ava } from '../../components/ava/Ava'
import { Rate } from 'antd';
import { Input } from '../../components/Input'
import { Button } from '../../components/Buton'

export const Listbookinfo = (props) => {
    const [[datainfo], setDatainfo] = useState(
        datasach.filter((el)=>{
        return el.id == props.id
    })
    );
    const [[book], setBook]= useState(
        datacontent.filter((el)=>{
        return el.id == props.id
    })
    );
    const [[com], setCom]= useState(
        dataComment.filter((el)=>{
        return el.id == props.id
    })
    );
    const [content,setContent] = useState(com.comment) 
    console.log(content)
    const [text, setText] = useState(book.content);
    const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
    const [value, setValue] = useState()
    const [valuecommnet, setValuecommnet] = useState()
    const changevalue = (el) =>{
        setValuecommnet(el)
        console.log(valuecommnet)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setContent([
            ...content,{
                    acc: "",
                    rate: 5,
                    content: valuecommnet
            }
        ])
    }

  return (
    <div className='Listbookinfo'>
        <div className='containerListbookinfo'>
            <div className='infobook'>
                <div className='imgbook'>
                   <img src={`/image/${datainfo.address}.jpg`} />
                </div>
                <div className='listinfo'>
                    <div className='namebook'>
                       <h1>{datainfo.name}</h1>
                    </div>
                    <ul>
                        <li>
                            <p>Tác Giả: {datainfo.author}</p>
                        </li>
                    <li>
                        <p>Nhà xuất bản: {datainfo.nxb}</p>
                    </li>
                    <li>
                        <p>Số trang: {datainfo.page}</p>
                    </li>
                    <li>
                        <p>Ngày phát hành: {datainfo.pulish}</p>
                    </li>
                    <div className='likeshare'>
                        <div className='likebuton'>
                            <button><AiFillLike/>Like 0</button>
                        </div>
                        <div className='likebuton'>
                            <button><FaShare/>Share</button>
                        </div>
                    </div>
                    </ul>
                </div>
            </div>
            <div className='datacontent'>
                <h1> Giới Thiệu Sách</h1>
                <div className='textarea'>
                    <ul>
                    {
                       text.map((el,index)=>{
                        return(
                            <li><p>{el}</p></li>
                        )
                       })
                    }
                    </ul>
                </div>
            </div>
            <div className='datacoment'>
                <div className='title-datacoment'>
                    <div className='tilte_comment'>
                       <p> Bình Luận</p>
                    </div>  
                </div>
                <div className='numbercoment'>
                        <p>{com.comment.length} comment</p>
                    </div>
                
                <div className='containercomment'>
                    {
                        content.map((el)=>{

                            return (
                                <div className='container-all-coment'>
                                    <div className='account'>
                                       <Ava email ={el.acc}/>
                                    </div>
                                    <div className='comment-content'>
                                      <div className='rate'>
                                        <Rate disabled defaultValue={el.rate}/>
                                        <div className="ant-rate-text">
                                        <p >{desc[el.rate - 1]}</p>
                                        </div>
                                      </div>
                                        <p className='text_comment'>{el.content}</p>
                                     </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='container-acc-comment'>
                        <div className='account'>
                                    <Ava email ={""}/>
                        </div>
                          <div className='comment-content'>
                             <span> Để lại bình luận của bạn </span>
                             <div className='comment-post'>
                             <Input
                              name={'comment'}
                              placeholder={'Comment'}
                              handleChange={changevalue}
                            />
                             <Button text='Post' handleClick={handleSubmit} />
                             </div>
                          </div>
                        </div>

            </div>
        </div>
    </div>
  )
}
