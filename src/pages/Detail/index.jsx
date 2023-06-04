import { useParams } from "react-router-dom";

import NotFound from "../../components/NotFound";
import Layout from "../../components/Layout";

import { useTitle } from "../../hooks/useTitle";
import { gallery_data } from "../../constants/gallery";

const DetailPage = () => {
  const { id } = useParams();

  const data = gallery_data;

  const isAvailable = data.some((data) => data.id === +id);
  const detailPost = data.find((data) => data.id === +id);

  useTitle(
    !isAvailable ? "Not Found || Fvngram" : `${detailPost.title} || Fvngram`
  );

  return (
    <Layout>
      {!isAvailable ? (
        <div className="min-h-[85vh]">
          <NotFound />
        </div>
      ) : (
        <div className="mb-20">
          <img
            src={detailPost.image}
            alt={detailPost.title}
            className="w-full h-96 object-cover"
          />
          <article className="my-5 mx-4 lg:mx-10 space-y-4">
            <h3 className="capitalize font-semibold text-xl lg:text-3xl">
              {detailPost.title}
            </h3>
            <span className="text-xs uppercase lg:text-sm">{`${detailPost.category} - ${detailPost.date}`}</span>
            <p className="text-justify min-h-[50vh]">
              {detailPost.caption}
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur, repudiandae adipisci architecto ipsam, iusto hic
              corporis totam ut, sunt necessitatibus et molestias non dolorum
              harum! Eveniet atque, quam laboriosam aut dolorem quos magni ab
              dignissimos vel in dolor iste ducimus provident sapiente? Ipsa
              magnam iusto animi unde necessitatibus, quasi modi?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              distinctio reprehenderit, ipsam quae, aliquam non minus iusto,
              optio nam voluptate unde. Hic itaque animi eos dicta consequuntur
              alias odit nostrum maiores veritatis. Cupiditate, repudiandae?
              Omnis laudantium quos nobis quidem porro eum corrupti, similique
              enim beatae eius quae in, blanditiis, provident perspiciatis vitae
              iusto nisi cupiditate doloremque voluptate. Exercitationem
              necessitatibus placeat, minima quibusdam ex recusandae cupiditate
              aut aspernatur quos nulla, non voluptas nisi. Natus magnam itaque
              omnis at iste voluptates delectus enim, accusamus perferendis?
              Amet, eveniet at, earum architecto debitis temporibus aliquid
              itaque modi repudiandae quae iusto nostrum ducimus inventore
              commodi.
            </p>
          </article>
        </div>
      )}
    </Layout>
  );
};

export default DetailPage;
