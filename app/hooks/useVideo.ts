import { useState, useEffect } from 'react';
import { useSupabase } from '../supabase-provider';

const useVideo = (id: string) => {
  const supabase = useSupabase();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      const { data: video, error } = await supabase
        .from('videos')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching video:', error.message);
        return;
      }

      setVideo(video);
      setLoading(false);
    };

    fetchVideo();
  }, [id, supabase]);

  return { video, loading };
};

export default useVideo;
